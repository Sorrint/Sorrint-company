import React, { useEffect, useState } from 'react';
import { validator } from '../../utils/validator';
import TextField from '../common/form/textField';
import SelectField from '../common/form/selectField';
import RadioField from '../common/form/radioField';
import MultiSelectField from '../common/form/multiSelectField';
import CheckBoxField from '../common/form/checkBoxField';
import { useDispatch, useSelector } from 'react-redux';
import { getQualities } from '../../store/qualities';
import { getProfessions } from '../../store/professions';
import { signUp } from '../../store/users';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: '',
        name: '',
        password: '',
        profession: '',
        sex: 'female',
        qualities: [],
        license: false
    });

    const qualities = useSelector(getQualities());
    const qualitiesList = qualities.map((q) => ({
        value: q._id,
        label: q.name
    }));
    const professions = useSelector(getProfessions());
    const professionsList = professions.map((p) => ({
        value: p._id,
        label: p.name
    }));
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validatorConfig = {
        email: {
            isRequired: { message: 'Электронная почта обязательна для заполнения' },
            isEmail: { message: 'Email введен некорректно' }
        },
        name: {
            isRequired: { message: 'Имя обязательно для заполнения' },
            min: {
                message: 'Имя должно быть не менее 3 символов',
                value: 3
            }
        },
        password: {
            isRequired: { message: 'Пароль обязателен для заполнения' },
            isCapitalSymbol: { message: 'Пароль должен содержать хотя бы одну заглавную букву' },
            isContainDigit: { message: 'Пароль должен содержать хотя бы одну цифру' },
            min: {
                message: 'Пароль должен быть не менее 8 символов',
                value: 8
            }
        },
        profession: {
            isRequired: { message: 'Обязательно выберите Вашу профессию' }
        },
        license: {
            isRequired: {
                message: 'Вы не можете пользоваться нашим сервисом без Лицензионного соглашения'
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const newData = { ...data, qualities: data.qualities.map((q) => q.value) };
        dispatch(signUp(newData));
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Электронная почта"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField label="Имя" name="name" value={data.name} onChange={handleChange} error={errors.name} />
                <TextField
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <SelectField
                    label="Выберите свою профессию"
                    defaultOption="Choose..."
                    name="profession"
                    options={professionsList}
                    onChange={handleChange}
                    value={data.profession}
                    error={errors.profession}
                />
                <RadioField
                    options={[
                        { name: 'Male', value: 'male' },
                        { name: 'Female', value: 'female' },
                        { name: 'Other', value: 'other' }
                    ]}
                    label="Выберите Ваш пол"
                    name="sex"
                    value={data.sex}
                    onChange={handleChange}
                />
                <MultiSelectField
                    options={qualitiesList}
                    onChange={handleChange}
                    defaultValue={data.qualities}
                    name="qualities"
                    label="Выберите Ваши качества"
                />
                <CheckBoxField name="license" value={data.license} onChange={handleChange} error={errors.license}>
                    Подтвердить <a>Лицензионное соглашение</a>
                </CheckBoxField>
                <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">
                    Submit
                </button>
            </form>
        </>
    );
};

export default RegisterForm;
