import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye',
  description: string,
  amount: number
}

interface ChallengesProviderProps {
  children: ReactNode
}

interface ChallengesContextData {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  activeChallenge: Challenge,
  levelUp: () => void;
  startNewChallenge: () => void;
}

export function ChallengesProvider({children}: ChallengesProviderProps) {
  const [ level, setLevel ] = useState(1);
  const [ currentExperience, setCurrentExperience] = useState(0);
  const [ challengesCompleted, setChallengesCompleted ] = useState(0);
  const [ activeChallenge, setActiveChallenge ] = useState(null)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    console.log('start new challange')
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
  }

  return (
    <ChallengesContext.Provider 
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge}}>
      {children}
    </ChallengesContext.Provider>
  )
}

export const ChallengesContext = createContext({} as ChallengesContextData);