import { render, screen } from "@testing-library/react";
import { CandidateScreenDetails } from ".";
import vector from "../../../../public/images/vector.svg";
import email from "../../../../public/images/email.svg";
import dob from "../../../../public/images/dob.svg";
import phone from "../../../../public/images/phone.svg";
import zipcode from "../../../../public/images/zipcode.svg";
import social from "../../../../public/images/social.svg";
import license from "../../../../public/images/license.svg";
import calendar from "../../../../public/images/calendar.svg";
import status from "../../../../public/images/status.svg";
import adjust from "../../../../public/images/adjust.svg";
import packageReport from "../../../../public/images/package.svg";
import completeDate from "../../../../public/images/completeDate.svg";
import clock from "../../../../public/images/clock.svg";
const userDetails = [
  {
    icon: vector,
    property: "Name",
    value: "John Smith",
  },
  {
    icon: email,
    property: "Email",
    value: "John.smith@checkr.com",
  },
  {
    icon: dob,
    property: "DOB",
    value: "1990-09-10 (26)",
  },
  {
    icon: phone,
    property: "Phone",
    value: "(555) 555-5555",
  },
  {
    icon: zipcode,
    property: "Zipcode",
    value: "94158",
  },
  {
    icon: social,
    property: "Social Security",
    value: "XXX-XX-6789",
  },
  {
    icon: license,
    property: "Drivers License",
    value: "FTEST1111 (CA)",
  },
  {
    icon: calendar,
    property: "Created At ",
    value: "Nov 29,2016 11:05:57 AM",
  },
];
const reportDetails = [
  {
    icon: status,
    property: "Status",
    value: "Clear",
  },
  {
    icon: adjust,
    property: "Adjustification",
    value: "-",
  },
  {
    icon: packageReport,
    property: "Package",
    value: "Employee pro",
  },
  {
    icon: calendar,
    property: "Created At",
    value: "Dec 1, 2016 12:00:00 PM",
  },
  {
    icon: completeDate,
    property: "Completed Date",
    value: "Dec 4, 2016 12:00:00 PM",
  },
  {
    icon: clock,
    property: "Turn Around Time",
    value: "1 Day , 14 hours",
  },
];
const courtSearch = [
  {
    date: "2/22/2022",
    id: 1,
    search: "SSN Verification",
    status: "CLEAR",
  },
  {
    date: "3/13/2022",
    id: 2,
    search: "Sex Offender",
    status: "CLEAR",
  },
  {
    date: "7/2/2022",
    id: 3,
    search: "Global Watchlist",
    status: "CONSIDER",
  },
  {
    date: "2/20/2022",
    id: 4,
    search: "Federal Criminal",
    status: "CLEAR",
  },
  {
    date: "5/19/2022",
    id: 5,
    search: "County Criminal",
    status: "CLEAR",
  },
];
describe("Candidates template", () => {
  test("template", async () => {
    render(
      <CandidateScreenDetails
        candidateInfo={userDetails}
        reportInfo={reportDetails}
        courtSearchData={courtSearch}
      />
    );
    expect(screen.getByTestId("details")).toBeInTheDocument();
  });
});
