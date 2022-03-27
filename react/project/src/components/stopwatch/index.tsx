import Button from "../button";
import Watch from "./watch/watch";
import style from "./stopWatch.module.scss"

export default function StopWatch() {

    return (
        <div className={style.cronometro}>

            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

            <div className={style.relogioWrapper}>
                <Watch></Watch>
            </div>
            <Button>
                Começar!
            </Button>


        </div>
    )


}