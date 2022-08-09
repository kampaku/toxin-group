import React, { FC, FormEvent, useEffect, useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Input, RadioButtonGroup, MaskInput } from 'components';
import { timeOptions } from 'utils/timeOptions';

import styles from './UserPersonalItem.module.scss';

type Props = {
  item: PersonalFormData;
  label: string;
  onAcceptButtonClick: (newPersonalData: PersonalFormData) => void;
};

const UserPersonalItem: FC<Props> = ({ item, label, onAcceptButtonClick }) => {
  const [value, setValue] = useState(item.value);
  const [isEditAllowed, setIsEditAllowed] = useState(false);
  const { t } = useTranslation('user-page');
  const { locale } = useRouter();

  const handleConfirmButtonClick = (e: FormEvent) => {
    e.preventDefault();
    setIsEditAllowed((prevState) => !prevState);

    onAcceptButtonClick({ key: item.key, value });
  };

  const handleDisplayButtonClick = () => {
    setIsEditAllowed((prevState) => !prevState);
  };

  const handleMaskInputChange = (maskInputValue: string) => {
    setValue(`${new Date(maskInputValue).getTime() / 1000}`);
  };

  const handleRadioInputChange = (gender: string) => {
    setValue(gender);
  };

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  const getInputType = (): string => {
    switch (item.key) {
      case 'password':
        return 'password';
      case 'email':
        return 'email';
      default:
        return 'text';
    }
  };

  const getInput = () => {
    switch (item.key) {
      case 'birthday':
        return <MaskInput name={item.value} onChange={handleMaskInputChange} />;
      case 'gender':
        return (
          <RadioButtonGroup
            buttonsProps={[
              { name: 'gender', text: t('male'), value: 'male' },
              { name: 'gender', text: t('female'), value: 'female' },
            ]}
            active={value}
            onChange={handleRadioInputChange}
          />
        );
      default:
        return (
          <Input
            placeholder={label}
            type={getInputType()}
            parentValue={value}
            onChange={handleTextInputChange}
          />
        );
    }
  };

  useEffect(() => {
    setValue(item.value);
  }, [item.value]);

  const isSimpleValue =
    item.key !== 'password' && item.key !== 'birthday' && item.key !== 'gender';

  return (
    <form
      className={styles.userPersonalItem}
      onSubmit={handleConfirmButtonClick}
    >
      <label className={styles.userPersonalItem__textWrapper}>
        <span className={styles.userPersonalItem__label}>{t(label)}:</span>
        {isEditAllowed ? (
          <div className={styles.userPersonalItem__input}>{getInput()}</div>
        ) : (
          <span className={styles.userPersonalItem__text}>
            {item.key === 'password' && '*********'}
            {item.key === 'birthday' &&
              new Date(+JSON.parse(value) * 1000).toLocaleString(
                locale || [],
                timeOptions
              )}
            {item.key === 'gender' &&
              (value === 'male' ? t('male') : t('female'))}
            {isSimpleValue && value}
          </span>
        )}
      </label>
      <div className={styles.userPersonalItem__control}>
        {isEditAllowed ? (
          <button className={styles.userPersonalItem__button} type="submit">
            <FaRegCheckCircle className={styles.userPersonalItem__buttonIcon} />
          </button>
        ) : (
          <span
            onKeyDown={handleDisplayButtonClick}
            role="button"
            tabIndex={0}
            className={styles.userPersonalItem__button}
            onClick={handleDisplayButtonClick}
          >
            <FiEdit className={styles.userPersonalItem__buttonIcon} />
          </span>
        )}
      </div>
    </form>
  );
};

export { UserPersonalItem };
