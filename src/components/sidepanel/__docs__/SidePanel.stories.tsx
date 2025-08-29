import type { Meta, StoryObj } from "@storybook/react";

import SidePanel from "../SidePanel";

const meta: Meta<typeof SidePanel> = {
  title: "SidePanel",
  component: SidePanel
};

export default meta;
type Story = StoryObj<typeof SidePanel>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => console.log("onClose"),
    side: "right",
    size: "large",
    titleComponent: "Panel title",
    actions: [
      {
        label: "Action 1",
        buttonVariant: "primary",
        onClick: () => console.log("Action 1 clicked")
      },
      {
        label: "Action 2",
        buttonVariant: "secondary",
        onClick: () => console.log("Action 2 clicked")
      }
    ],
    children: (
      <div>
        <p>This is the content of the side panel.</p>
        <p>You can add any content here, such as forms, lists, or other components.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, sem at tristique dictum, mauris sem blandit nunc, ac ornare est mi non purus. Nam condimentum
          est consequat, varius lectus sit amet, condimentum risus. Donec eget euismod justo. Fusce in condimentum felis, non gravida ex. Sed vel tellus id justo ornare euismod.
          Vivamus pellentesque at dui et rhoncus. Etiam sollicitudin est at tellus interdum, sit amet vulputate nisi mattis. Quisque dignissim risus est, id tincidunt nibh dictum
          eget. In sed euismod arcu, sit amet luctus nulla. Nam fringilla, sapien feugiat facilisis tempor, turpis magna faucibus ipsum, quis iaculis dolor massa id diam. Nullam
          faucibus risus vitae velit scelerisque, in ultrices nunc malesuada. Sed rhoncus mi in mauris tempus convallis. Phasellus tempor neque et egestas hendrerit. Etiam cursus
          id mi semper posuere. Integer facilisis aliquam mollis. Vestibulum pretium metus ac metus condimentum, pretium pretium turpis volutpat. Quisque vitae quam congue, cursus
          lacus in, faucibus augue. Donec vel ante id ante volutpat ultrices. Suspendisse scelerisque tortor ac lorem interdum vehicula. Vivamus facilisis tempus purus et egestas.
          In facilisis nibh non elit suscipit vulputate. Aenean molestie nisl at massa ultrices cursus. Vivamus sed ultrices massa, sed mattis lacus. Morbi euismod sodales
          faucibus. Etiam purus risus, convallis at elementum vehicula, sodales nec nunc. Ut eu euismod sapien. Ut vehicula facilisis sapien vitae dictum. Mauris euismod velit
          iaculis, egestas nunc vel, eleifend arcu. Sed sed molestie odio. Duis accumsan lacinia vestibulum. Sed faucibus ac eros eget malesuada. Nam eget consectetur elit, ut
          varius purus. Aenean aliquam varius consequat. Sed porttitor dolor non odio semper gravida. Suspendisse eget eros rhoncus, pulvinar orci eget, posuere neque. Nunc non
          ultrices quam, eget euismod quam. Sed vel viverra purus, at convallis eros. Aenean et felis magna. Aenean a felis in lectus dapibus interdum nec id orci. Cras in viverra
          nunc, eget placerat dui. Suspendisse odio dolor, volutpat nec erat et, tincidunt consectetur sapien. Nunc imperdiet risus id ante egestas, at rhoncus leo maximus. Sed
          interdum orci et elementum vestibulum. Donec tempus vel justo dapibus mollis. Morbi quis euismod magna. Mauris vitae purus ornare, sagittis risus ac, elementum odio.
          Suspendisse in eros ut sem lobortis maximus. Etiam ornare mattis mauris, ac commodo eros porttitor quis. Nulla tempus placerat convallis. Nulla eget est ac ipsum rutrum
          elementum. Donec vulputate interdum dignissim. In venenatis pulvinar tellus quis vestibulum. In et faucibus elit. Vestibulum velit diam, volutpat a scelerisque in,
          egestas eu ex. Nullam non augue lobortis, mattis lacus in, vehicula nisl. Nam nec dui est. Donec ligula ipsum, venenatis ut tortor sit amet, accumsan sagittis nisi. Donec
          efficitur urna libero, ut rutrum mauris semper in. Nunc a dignissim neque. Proin dignissim arcu purus, sit amet efficitur felis posuere eu. Nullam lacinia, est in
          tincidunt maximus, neque dui lacinia sem, in feugiat lectus tortor sed dui. Vivamus ac risus leo. Vivamus ut porttitor libero. Nunc euismod venenatis aliquet. Nulla
          accumsan turpis varius urna finibus eleifend. Quisque et urna elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, sem at tristique dictum, mauris sem blandit nunc, ac ornare est mi non purus. Nam condimentum
          est consequat, varius lectus sit amet, condimentum risus. Donec eget euismod justo. Fusce in condimentum felis, non gravida ex. Sed vel tellus id justo ornare euismod.
          Vivamus pellentesque at dui et rhoncus. Etiam sollicitudin est at tellus interdum, sit amet vulputate nisi mattis. Quisque dignissim risus est, id tincidunt nibh dictum
          eget. In sed euismod arcu, sit amet luctus nulla. Nam fringilla, sapien feugiat facilisis tempor, turpis magna faucibus ipsum, quis iaculis dolor massa id diam. Nullam
          faucibus risus vitae velit scelerisque, in ultrices nunc malesuada. Sed rhoncus mi in mauris tempus convallis. Phasellus tempor neque et egestas hendrerit. Etiam cursus
          id mi semper posuere. Integer facilisis aliquam mollis. Vestibulum pretium metus ac metus condimentum, pretium pretium turpis volutpat. Quisque vitae quam congue, cursus
          lacus in, faucibus augue. Donec vel ante id ante volutpat ultrices. Suspendisse scelerisque tortor ac lorem interdum vehicula. Vivamus facilisis tempus purus et egestas.
          In facilisis nibh non elit suscipit vulputate. Aenean molestie nisl at massa ultrices cursus. Vivamus sed ultrices massa, sed mattis lacus. Morbi euismod sodales
          faucibus. Etiam purus risus, convallis at elementum vehicula, sodales nec nunc. Ut eu euismod sapien. Ut vehicula facilisis sapien vitae dictum. Mauris euismod velit
          iaculis, egestas nunc vel, eleifend arcu. Sed sed molestie odio. Duis accumsan lacinia vestibulum. Sed faucibus ac eros eget malesuada. Nam eget consectetur elit, ut
          varius purus. Aenean aliquam varius consequat. Sed porttitor dolor non odio semper gravida. Suspendisse eget eros rhoncus, pulvinar orci eget, posuere neque. Nunc non
          ultrices quam, eget euismod quam. Sed vel viverra purus, at convallis eros. Aenean et felis magna. Aenean a felis in lectus dapibus interdum nec id orci. Cras in viverra
          nunc, eget placerat dui. Suspendisse odio dolor, volutpat nec erat et, tincidunt consectetur sapien. Nunc imperdiet risus id ante egestas, at rhoncus leo maximus. Sed
          interdum orci et elementum vestibulum. Donec tempus vel justo dapibus mollis. Morbi quis euismod magna. Mauris vitae purus ornare, sagittis risus ac, elementum odio.
          Suspendisse in eros ut sem lobortis maximus. Etiam ornare mattis mauris, ac commodo eros porttitor quis. Nulla tempus placerat convallis. Nulla eget est ac ipsum rutrum
          elementum. Donec vulputate interdum dignissim. In venenatis pulvinar tellus quis vestibulum. In et faucibus elit. Vestibulum velit diam, volutpat a scelerisque in,
          egestas eu ex. Nullam non augue lobortis, mattis lacus in, vehicula nisl. Nam nec dui est. Donec ligula ipsum, venenatis ut tortor sit amet, accumsan sagittis nisi. Donec
          efficitur urna libero, ut rutrum mauris semper in. Nunc a dignissim neque. Proin dignissim arcu purus, sit amet efficitur felis posuere eu. Nullam lacinia, est in
          tincidunt maximus, neque dui lacinia sem, in feugiat lectus tortor sed dui. Vivamus ac risus leo. Vivamus ut porttitor libero. Nunc euismod venenatis aliquet. Nulla
          accumsan turpis varius urna finibus eleifend. Quisque et urna elit.
        </p>
      </div>
    )
  }
};
