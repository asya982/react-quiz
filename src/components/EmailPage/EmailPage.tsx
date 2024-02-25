import { ChangeEvent, FC, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import Input from "../../ui/Input";

import { useNavigate } from "react-router-dom";

const EmailPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValid(true);
    const value = e.target.value;
    setEmail(value);
  };

  const submitEmail = () => {
    if (email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      localStorage.setItem('email', email);
      navigate("/thank-you");
      return;
    }

    setValid(false);
  };

  return (
    <>
      <div>
        <h2>{t("after_quiz.email")}</h2>
        <p>{t("after_quiz.email_comment")}</p>
      </div>
      <Input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder={t("after_quiz.your_email")}
        valid={valid}
        errorMessage={valid ? "" : t("after_quiz.invalid_email")}
      />
      <p>
        <Trans
          components={{
            a: <a className="highlight" href="#" />,
            b: <a className="highlight" href="#" />,
          }}
          i18nKey={`after_quiz.privacy`}
        />
      </p>
      <button disabled={!valid || !email.length} onClick={submitEmail}>
        {t("after_quiz.next")}
      </button>
    </>
  );
};

export default EmailPage;
