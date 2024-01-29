import { MusicBoxClosed } from './musicBoxClosed';
import { MusicBoxOpened } from './musicBoxOpened';

interface IMusicBox {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MusicBox = ({ isOpen, setIsOpen }: IMusicBox) => {

    return (
        <>
            {isOpen ?
                <MusicBoxOpened></MusicBoxOpened> :
                <MusicBoxClosed setIsOpen={setIsOpen}></MusicBoxClosed>}
        </>
    )
}