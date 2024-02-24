import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import { useTranslation } from "react-i18next";

const FinishPage: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/email");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <>
      <Loader />
      <p>{t("after_quiz.loader")}</p>
    </>
  );
};

export default FinishPage;
