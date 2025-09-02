export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
