import dayjs, { Dayjs } from "dayjs";

const between = (
  from: string | Date | Dayjs = "2012-01-01",
  to: string | Date | Dayjs = dayjs().subtract(6, "month")
) => {
  const fromMilli = dayjs(from).valueOf();
  const max = dayjs(to).valueOf() - fromMilli;
  const dateOffset = Math.floor(Math.random() * max + 1);
  const newDate = dayjs(fromMilli + dateOffset).startOf("day");

  return dayjs(newDate);
};
export default between;
