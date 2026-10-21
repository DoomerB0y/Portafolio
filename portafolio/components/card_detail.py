import reflex as rx
from portafolio.data import Extra
from portafolio.styles.styles import Size


def card_detail(extra: Extra) -> rx.Component:
    card_body = rx.vstack(
        rx.text.strong(extra.title),
        rx.text(
            extra.description,
            size=Size.SMALL.value,
            color_scheme="gray",
        ),
        spacing=Size.SMALL.value,
        align_items="start",
        width="100%",
    )

    return rx.card(
        rx.cond(
            extra.url != "",
            rx.link(
                card_body,
                href=extra.url,
                is_external=True,
                underline="hover",
            ),
            card_body,
        ),
        width="100%",
    )
