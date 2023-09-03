import css from  "./WhoAreWe.module.css";

function WhoAreWe(): JSX.Element {
    return (
        <div className={css.Container}>
			<p className={css.NiceText}>We are northwind company...</p>
            <p className={css.OpenHours}>We're open 24/7!</p>
        </div>
    );
}

export default WhoAreWe;
