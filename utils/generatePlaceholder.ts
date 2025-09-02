export function generatePlaceholder(
  title: string,
  width = 800,
  height = 450
): string {
  const sum = Array.from(title).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const hue = sum % 360;
  const bg = `hsl(${hue} 60% 35%)`;
  const fg = `hsl(${hue} 80% 92%)`;
  const safeTitle = title
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  const fontSize = Math.max(24, Math.min(width, height) * 0.12);
  const svg = `<?xml version='1.0' encoding='UTF-8'?>\n<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>\n  <rect width='100%' height='100%' fill='${bg}'/>\n  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, system-ui, -apple-system, Segoe UI, Arial, sans-serif' font-size='${fontSize}' fill='${fg}' font-weight='700'>${safeTitle}</text>\n</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
