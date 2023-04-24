import axios from "axios";
export class CandidateService {
  static ListCandidates = async () => {
    return await axios.get(`http://localhost:8000/candidate`);
  };
  static ListAdverseActionService = async () => {
    return await axios.get(`http://localhost:8000/adverseActionsList`);
  };
  static DetailCandidate = async (empid: string | undefined) => {
    return await axios.get(`http://localhost:8000/candidate/${empid}`);
  };

  static editData = async ({
    id,
    adjudication,
  }: {
    id: string | undefined;
    adjudication: string;
  }) => {
    return await axios.patch(`http://localhost:8000/candidate/${id}`, {
      adjudication,
    });
  };
}
