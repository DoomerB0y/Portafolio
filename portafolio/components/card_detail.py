import reflex as rx
from portafolio.data import Extra

from portafolio.styles.styles import IMAGE_HEIGHT, Size

def card_detail(extra: Extra) -> rx.Component:
    card_body = rx.box(
        rx.inset(
            rx.image(
                src=extra.image,
                height=IMAGE_HEIGHT,
                width="100%",
                object_fit="cover"
            ),
            pb=Size.DEFAULT.value
        ),
        rx.text.strong(extra.title),
        rx.text(
            extra.description,
            size=Size.SMALL.value,
            color_scheme="gray"
        )
    )
    return rx.card(
        rx.cond(
            extra.url != "",
            rx.link(
                card_body,
                href=extra.url,
                is_external=True,
                underline="hover"
            ),
            card_body
        ),
        width="100%"
    )

