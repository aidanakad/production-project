import {classNames} from "shared/lib/classNames/classNames";
import cls from './ErrorPage.module.scss';
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface ErrorPageProps{
    className?: string;
}
export const PageError = ({className}: ErrorPageProps) =>{
    const {t} = useTranslation()

    const reloadPage = () =>{
        location.reload()
    }
    return(
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Something went wrong')}</p>

            <Button onClick={reloadPage}>{t('Reload the page')}</Button>
        </div>
    )
}