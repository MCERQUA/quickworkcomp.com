#!/usr/bin/env bash
# Generate all images for quickworkcomp.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/quickworkcomp.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — QUICK WORK COMP / contractor workers comp ===

gen "hero.jpg" \
  "Photorealistic wide shot of a contractor on a phone getting workers comp coverage while looking at a construction project, urgency and professionalism, natural outdoor lighting, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic photo of a contractor receiving a digital workers comp certificate of insurance on a smartphone at a job site, fast and modern, professional photography, no text" 4

gen "about.jpg" \
  "Photorealistic portrait of a friendly and efficient insurance agent at a modern desk ready to help contractors, clean professional office, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide panoramic photo of a construction contractor getting instant workers comp coverage on a laptop at a job site trailer office, professional photography, no text" 4 1216 640

gen "same-day-quotes.jpg" \
  "Photorealistic photo of a workers comp quote appearing on a laptop screen in 15 minutes, contractor sitting at desk, professional business photography, no text" 4

gen "pay-as-you-go.jpg" \
  "Photorealistic photo of a contractor reviewing payroll and workers comp payment schedule on a tablet, clean business photography, no text" 4

gen "ghost-policy.jpg" \
  "Photorealistic photo of a sole proprietor contractor holding a certificate of insurance paper with satisfied expression, professional photography, no text" 4

gen "contractor-wc.jpg" \
  "Photorealistic photo of a professional contractor in safety gear signing workers compensation paperwork at a construction site, no text" 4

gen "peo-alternative.jpg" \
  "Photorealistic photo of a small business owner meeting with an HR and insurance consultant about workforce coverage options, professional office scene, no text" 4

gen "certificate-of-insurance.jpg" \
  "Photorealistic close-up photo of an official ACORD 25 certificate of insurance form being printed, professional business photography, no text" 4

gen "annual-wc-policy.jpg" \
  "Photorealistic photo of a contractor reviewing an annual workers compensation policy document at a clean desk, professional photography, no text" 4

gen "wc-audit-defense.jpg" \
  "Photorealistic photo of an insurance agent and contractor reviewing workers comp audit documents together, professional consultation, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
