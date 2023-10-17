import moment from "moment";
const formatDate = (dateString) => {
  const originalDate = moment(dateString);
  return originalDate.format("h:mm a, D MMM YYYY");
};

export default formatDate;
