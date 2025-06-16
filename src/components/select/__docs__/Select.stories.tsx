import type { Meta, StoryObj } from "@storybook/react";
import Select, { SelectOption, SelectOptionGroup } from "../Select";

const options: SelectOption[] = [
  { value: "1", text: "Carne Asada" },
  { value: "2", text: "Carne Al Pastor" },
  { value: "3", text: "Birria Tacos" },
  { value: "4", text: "Tacos" },
  { value: "5", text: "Burrito" },
  { value: "6", text: "Quesadilla" },
  { value: "7", text: "Tortas" },
  { value: "8", text: "Tamales" },
  { value: "9", text: "Enchiladas" },
  { value: "10", text: "Chiles Rellenos" }
];

const optionGroups: SelectOptionGroup[] = [
  {
    label: "Mexican Food",
    options: [
      { value: "1", text: "Carne Asada" },
      { value: "2", text: "Carne Al Pastor" },
      { value: "3", text: "Birria Tacos" }
    ]
  },
  {
    label: "American Food",
    options: [
      { value: "11", text: "Hamburger" },
      { value: "12", text: "Hot Dog" },
      { value: "13", text: "BBQ Ribs" }
    ]
  },
  {
    label: "Italian Food",
    options: [
      { value: "21", text: "Pizza" },
      { value: "22", text: "Pasta" },
      { value: "23", text: "Risotto" }
    ]
  }
];

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options,
    label: "Choose an option",
    size: "medium",
    disabled: false
  }
};

export const WithOptionGroups: Story = {
  args: {
    optionGroups,
    label: "Select Food Category",
    helperText: "Choose from different food categories",
    size: "medium",
    disabled: false
  }
};

export const ConnectorTypes: Story = {
  args: {
    label: "Choose Connector type",
    optionGroups: [
      {
        label: "OPCUA",
        options: [
          { value: "opcua-server", text: "OpcUa Server Connector" },
          { value: "opcua-client", text: "OpcUa Client Connector" }
        ]
      },
      {
        label: "UDP",
        options: [{ value: "udp-server", text: "UDP Server Connector" }]
      },
      {
        label: "TEST",
        options: [
          { value: "test", text: "Test Connector" },
          { value: "test-datapoints", text: "Test Datapoints Reciever" },
          { value: "test-reciever", text: "Test Reciever Connector" },
          { value: "test-sender", text: "Test Sender Connector" }
        ]
      },
      {
        label: "STORAGE",
        options: [{ value: "osisoft-pi", text: "Osisoft PI Storage Connector" }]
      },
      {
        label: "CLOUD",
        options: [
          { value: "cloud-sync", text: "CloudSyncMetric Connector" },
          { value: "signal-r", text: "SignalRCloud Connector" }
        ]
      }
    ],
    size: "medium"
  }
};

export const Primary: Story = {
  name: "Custom placeholder",
  ...Select,
  args: {
    options,
    size: "medium",
    disabled: false,
    placeholder: "Select a meal"
  }
};
