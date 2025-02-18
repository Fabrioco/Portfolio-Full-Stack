export function NavButtonsLearnings() {
  return (
    <nav className="flex gap-4 items-center overflow-x-auto text-nowrap">
      <button className="bg-button border border-button text-buttonText px-4 py-2 font-bold rounded-full">
        Front-End
      </button>
      <button className="bg-button border border-button text-buttonText px-4 py-2 font-bold rounded-full">
        Back-end
      </button>
      <button className="bg-button border border-button text-buttonText px-4 py-2 font-bold rounded-full">
        Banco de Dados
      </button>
      <button className="bg-button border border-button text-buttonText px-4 py-2 font-bold rounded-full">
        Outros
      </button>
    </nav>
  );
}
