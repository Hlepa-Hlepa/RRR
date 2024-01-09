import { SubmitHandler, useForm } from "react-hook-form";
import { IMyForm } from "../interfaces/IMyForm";
import { useTasks } from "../hooks/useTasks";
import styled from "styled-components";

const SiteForm = styled.form`
  color: --text-color;
  display: flex;
  width: 500px;
  margin: 5rem auto;
  flex-direction: column;
  gap: 10px;
`;

const FormInput = styled.input`
  color: --text-color;
  padding: 0.7rem 1.7rem;
  margin: 5px;
  border-radius: 10px;
`

const FormButton = styled.button`
  color: --text-color;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 5px;
  font-size: 17px;
  &:hover {
    opacity: .7;
  }
  &:disabled{
    opacity: .2;
  }
`

const FormLabel  = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Form: React.FC = () => {
const {tasks, setTasks} = useTasks();
  const saveElement: SubmitHandler<IMyForm> = data => {
    setTasks((prev) => [...prev, data]);
    reset();
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IMyForm>({
    mode: "onBlur",
  });
  return (
    <SiteForm onSubmit={handleSubmit(saveElement)}>
      <FormLabel>
        Имя:
        <FormInput
        placeholder="Введите ваше имя"
        type="text"
          {...register("name", {
            required: "Обязательно к заполнению",
            minLength: {
              value: 1,
              message: "Больше слов",
            },
          })}
        />
      </FormLabel>
      <FormLabel>
        Возраст:
        <FormInput
        placeholder="Введите ваш возраст"
        type="number"
          {...register("age", {
            required: "Обязательно к заполнению",
            minLength: {
              value: 2,
              message: "Больше цифр",
            },
          })}
        />
      </FormLabel>
      <FormLabel>
        Почта:
        <FormInput
        placeholder="Введите вашу почту"
        type="email"
          {...register("email", {
            required: "Обязательно к заполнению",
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            minLength: {
              value: 10,
              message: "Введите почту форма example@site.ru",
            },
          })}
        />
      </FormLabel>
      <FormLabel>
        Номер телефона:
        <FormInput
        placeholder="Введите номер вашего телефона"
          {...register("phoneNumber", {
            required: "Обязательно к заполнению",
            pattern: /^\d{10}$/,
            maxLength: {
              value: 15,
              message: "Введите номер телефона без +",
            },
          })}
        />
      </FormLabel>
      <p>{errors.name?.message}</p>
      <FormButton disabled={!isValid} type="submit">Сохранить</FormButton>
      {tasks.map((task) => (
        <p>
            {task.name} - {task.age}
        </p>
      ))}
    </SiteForm>
  );
};
