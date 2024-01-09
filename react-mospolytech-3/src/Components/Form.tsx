import { SubmitHandler, useForm } from "react-hook-form";
import { IMyForm } from "../interfaces/IMyForm";
import { useTasks } from "../Hooks/useTasks";
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
  padding: 0.5rem 1.5rem;
`

const FormButton = styled.button`
  color: --text-color;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 5px;
`

export const Form: React.FC = () => {
const {tasks, setTasks} = useTasks();
  const saveElement: SubmitHandler<IMyForm> = data => {
    setTasks((prev) => [...prev, data]);
    reset();
    console.log(handleSubmit);
    
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMyForm>({
    mode: "onBlur",
  });
  return (
    <SiteForm onSubmit={handleSubmit(saveElement)}>
      <FormInput
      placeholder="Имя"
      type="text"
        {...register("name", {
          required: "Обязательно к заполнению",
          minLength: {
            value: 1,
            message: "Больше слов",
          },
        })}
      />
      <FormInput
      placeholder="Возраст"
      type="number"
        {...register("age", {
          required: "Обязательно к заполнению",
          minLength: {
            value: 2,
            message: "Больше цифр",
          },
        })}
      />
      <FormInput
      placeholder="Почта"
      type="email"
        {...register("email", {
          required: "Обязательно к заполнению",
          minLength: {
            value: 10,
            message: "Введите почту форма example@site.ru",
          },
        })}
      />
      <FormInput
      placeholder="Номер телефона"
      type="number"
        {...register("phoneNumber", {
          required: "Обязательно к заполнению",
          minLength: {
            value: 10,
            message: "Введите номер телефона",
          },
        })}
      />
      <p>{errors.name?.message}</p>
      <FormButton type="submit">Сохранить</FormButton>
      {tasks.map((task) => (
        <p>
            {task.name} - {task.age}
        </p>
      ))}
    </SiteForm>
  );
};
