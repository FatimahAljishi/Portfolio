import "./CertificateDetails.css";

export default function CertificateDetails({ certificate }) {
  return (
    <div className="certificate-details-container">
      <div className="certificate-image-container">
        <img className="certificate-image" src={certificate.image} />
      </div>
      <fieldset className="details-box">
        <legend>Details</legend>
        <p>
          <strong>Issued by:</strong>
          <br />
          {certificate.issuer}
        </p>
        <p>
          <strong>Issued to:</strong>
          <br />
          Fatimah Aljishi
        </p>
        <p>
          <strong>Completed:</strong>
          <br />
          {certificate.completionDate}
        </p>
        {certificate.credentialId && (
          <p>
            <strong>Credential ID:</strong>
            <br />
            {certificate.credentialId}
          </p>
        )}
        <p>
          {certificate.verifyUrl && (
            <>
              <strong>Verify at:</strong>
              <br />
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {certificate.verifyUrl}
              </a>
            </>
          )}
        </p>
      </fieldset>
    </div>
  );
}
