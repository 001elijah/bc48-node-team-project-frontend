import s from './Modal.module.scss';

const LabelBlock = () => {
  return (
    <>
      <div>
        <div>
          <input
            className={s.InputField}
            type="radio"
            id="without"
            name="filter"
            value="without"
          />
          <label className={s.LabelField} htmlFor="without">
            Without priority
          </label>
        </div>

        <div>
          <input
            className={s.InputField}
            type="radio"
            id="low"
            name="filter"
            value="low"
          />
          <label className={s.LabelField} htmlFor="low">
            Low
          </label>
        </div>

        <div>
          <input
            className={s.InputField}
            type="radio"
            id="medium"
            name="filter"
            value="medium"
          />
          <label className={s.LabelField} htmlFor="medium">
            Medium
          </label>
        </div>
        <div>
          <input
            className={s.InputField}
            type="radio"
            id="high"
            name="filter"
            value="high"
          />
          <label className={s.LabelField} htmlFor="high">
            High
          </label>
        </div>
      </div>
    </>
  );
};
export default LabelBlock;
