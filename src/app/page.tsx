'use client'

import styles from "./page.module.css";
import { MusicBox } from "./components/musicBox/musicBox";
import { Arrow } from "./components/arrow/arrow";
import { useState } from "react";
import Folders from "./components/folders/folders";
import Mobile from "./components/mobile/mobile";
import StartScreen from "./components/start-screen/startScreen";
import { Congrats } from "./components/guess/congrats";
import { useCongratsContext } from "./congratsContext";

export default function Home() {
  const [page, setPage] = useState<number>(3)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLock, setIsLock] = useState<boolean>(true)
  const [isStartLock, setStartIsLock] = useState<boolean>(true)

  const { isCongrats } = useCongratsContext()

  return (
    <div className={styles.div}>
      {isCongrats && <Congrats></Congrats>}
      {isStartLock ? <StartScreen setStartIsLock={setStartIsLock}></StartScreen> :
        (
          <>
            {page > 1 && <Arrow isLeft={true} numberPage={page - 1} setPage={setPage}></Arrow>}
            {page < 3 && <Arrow isLeft={false} numberPage={page + 1} setPage={setPage}></Arrow>}
            {page === 3 && <Folders></Folders>}
            {page === 2 && <Mobile setIsLock={setIsLock} isLock={isLock}></Mobile>}
            {page === 1 && <MusicBox isOpen={isOpen} setIsOpen={setIsOpen}></MusicBox>}
          </>
        )}
    </div >
  );
}
