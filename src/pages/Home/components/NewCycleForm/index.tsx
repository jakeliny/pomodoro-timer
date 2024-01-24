import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">I will work in</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Give your project a name"
      />

      <datalist id="task-suggestions">
        <option value="Pomodoro Timer Project" />
        <option value="Language study" />
        <option value="Technical study " />
        <option value="Read a book " />
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
      />

      <span>minutes.</span>
    </FormContainer>
  );
}
