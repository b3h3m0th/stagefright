export function scrollToHash(): void {
  const id: string = window.location.hash.substr(1);

  if (id) {
    const anchor: HTMLElement | null = document.getElementById(id);
    anchor && anchor.scrollIntoView();
  }
}
