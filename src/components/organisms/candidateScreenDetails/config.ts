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
import { CandidateType } from "../../../pages/candidateDetailPage";
export const CandidateInformation=({...props}:CandidateType)=>{
    const userDetails = [
        {
          icon: vector,
          property: "Name",
          value: props.name,
        },
        {
          icon: email,
          property: "Email",
          value: props.email,
        },
        {
          icon: dob,
          property: "DOB",
          value: props.dob,
        },
        {
          icon: phone,
          property: "Phone",
          value: props.phone,
        },
        {
          icon: zipcode,
          property: "Zipcode",
          value:props.zipcode,
        },
        {
          icon: social,
          property: "Social Security",
          value: props.socialSecurity,
        },
        {
          icon: license,
          property: "Drivers License",
          value: props.driversLicense,
        },
        {
          icon: calendar,
          property: "Created At ",
          value: props.createdAt,
        },
      ];
      const reportDetails = [
        {
          icon: status,
          property: "Status",
          value: props.status,
        },
        {
          icon: adjust,
          property: "Adjustification",
          value: props.adjudication,
        },
        {
          icon: packageReport,
          property: "Package",
          value: props.package,
        },
        {
          icon: calendar,
          property: "Created At",
          value: props.createdAt,
        },
        {
          icon: completeDate,
          property: "Completed Date",
          value: props.completedDate,
        },
        {
          icon: clock,
          property: "Turn Around Time",
          value: props.turnAroundTime,
        },
      ];
      return {userDetails,reportDetails}
}
  