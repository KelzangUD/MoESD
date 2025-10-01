import Intro from "./components/Intro";
import Vision from "./components/Vision";
import OrganizationalChart from "./components/OrganizationalChart";
import MinistryOffice from "./components/MinistryOffice";
import SecretaryOffice from "./components/SecretaryOffice";
import Directors from "./components/Dirctors";

export default function AboutUs() {
  return (
    <>
      <Intro />
      <Vision />
      <OrganizationalChart />
      <MinistryOffice />
      <SecretaryOffice />
      <Directors />
    </>
  );
}
