import reflex as rx


def gengar() -> rx.Component:
    """Carga el sprite animado y sus apariciones aleatorias en el navegador."""
    return rx.script(src="/gengar.js")
