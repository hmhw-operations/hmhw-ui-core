import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { withCodeSnippet } from "../../../../.storybook/decorators/withCodeSnippet";

const meta: Meta<typeof Example> = {
  title: "Pagination",
  component: Example
};

export default meta;
type Story = StoryObj<typeof Example>;

const codeDisplay = `const [pageNr, setPageNr] = useState(currentPage);

const handlePageChange = (page: number) => {
  setPageNr(page);
  console.log("Page changed to:", page)
};

useEffect(() => {
  if (currentPage <= totalPages && currentPage > 0) {
    setPageNr(currentPage);
  }
}, [currentPage]);
`;

export const Default: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
    skipMode: true,
    size: "medium",
    showMaxCount: true
  },
  decorators: [
    withCodeSnippet(codeDisplay, {
      message: `Pagination is a <i>controlled</i> UI component used to divide content
        across multiple pages.
        <br />
        This example is controlled by the code below.`,
      hideInDocs: false
    })
  ]
};
