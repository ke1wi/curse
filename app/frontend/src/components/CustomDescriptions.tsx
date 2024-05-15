import { Descriptions, DescriptionsProps } from "antd";

interface Props {
  name: string;
  group: string;
}

function CustomDescriptions({ name, group }: Props) {
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Студент",
      children: <p>{name}</p>,
    },
    {
      key: "2",
      label: "Група",
      children: <p>{group}</p>,
    },
  ];
  return <Descriptions items={items}></Descriptions>;
}

export default CustomDescriptions;
