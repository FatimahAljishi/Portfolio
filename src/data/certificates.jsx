import metaBackendImage from "../assets/meta-backend.png";
import SDEImage from "../assets/sde.png";
import certificateIcon from "../assets/certificate.png";
import pcepImage from "../assets/pcep.png";

export const certificates = [
  {
    id: "metaBackend",
    label: "Meta Back-End Developer Professional Certificate",
    icon: certificateIcon,
    image: metaBackendImage,
    issuer: "Coursera / Meta",
    completionDate: "13-04-2026",
    credentialId: "7GPJA63DP4ES",
    verifyUrl: "https://coursera.org/verify/professional-cert/7GPJA63DP4ES",
  },
  {
    id: "pythonSDE",
    label: "Python Software Development Bootcamp",
    icon: certificateIcon,
    image: SDEImage,
    issuer: "Saudi Digital Academy / WeCloud Data",
    completionDate: "25-06-2026",
  },
  {
    id: "pcep",
    label: "PCEP™ – Certified Entry-Level Python Programmer",
    icon: certificateIcon,
    image: pcepImage,
    issuer: "Python Institute",
    completionDate: "13-07-2026",
    credentialId: "2KdG.MCjO.MYgp",
    verifyUrl: "verify.openedg.org",
  },
];
