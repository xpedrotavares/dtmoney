import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/newTransactionModal';
import { TransactionsTable } from "./components/TransactionsTable";
import { GlobalStyle } from "./styles/global";



export function App() { //user o export aqui nessa linha e não o export default app na ultima linha. Isso ajuda a debugar e tbm na integilencia do react
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() { //Sempre que a função for executada a partir da ação de um user: iniciar o nome da function com handle.
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

  
  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
     <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

     <GlobalStyle />

    </>
  );
}
