import * as Yup from 'yup';

export let Validation = Yup.object().shape(
    {
        login: Yup.string().required("Podaj login"),
        password: Yup.string().required("Podaj hasło")
    }
)