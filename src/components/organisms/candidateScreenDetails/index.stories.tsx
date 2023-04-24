import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CandidateScreenDetails } from ".";
import { CandidateType } from "../../../pages/candidateDetailPage";
import { CandidateInformation } from "./config";
export default {
  title: "organisms/CandidateScreenDetails",
  component: CandidateScreenDetails,
} as ComponentMeta<typeof CandidateScreenDetails>;
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
const details: CandidateType = {
  id: 1,
  name: "John Smith",
  adjudication: "",
  status: "CLEAR",
  location: "Bangalore",
  date: "22/10/2019",
  email: "John.smith@checkr.com",
  dob: "1990-09-10 (26)",
  phone: "(555) 555-5555",
  zipcode: "94158",
  socialSecurity: "XXX-XX-6789",
  driversLicense: "FTEST1111 (CA)",
  createdAt: "Nov 29,2016 11:05:57 AM",
  package: "Employee pro",
  completedDate: "Dec 4, 2016 12:00:00 PM",
  turnAroundTime: "1 Day , 14 hours",
  courtSearch: [],
};
const { userDetails, reportDetails } = CandidateInformation(details);
const Template: ComponentStory<typeof CandidateScreenDetails> = (args) => (
  <CandidateScreenDetails {...args} />
);
export const candidateDetails = Template.bind({});
candidateDetails.args = {
  candidateInfo: userDetails,
  reportInfo: reportDetails,
  courtSearchData: courtSearch,
};
