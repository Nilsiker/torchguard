
import TwoOption from "./TwoOption"

const NatureRecruitment = ({ states, handles }) => {
    const handleNatureQs = (e) => {
        switch (e.name) {
            case "saveuse":
                handles.setNature1(e.choice)
                handles.setStep(11)
                break
            case "fighthide":
                handles.setNature2(e.choice)
                handles.setFighterLoss(e.choice === 1)
                handles.setStep(12)
                break
            case "fear":
                handles.setNature3(e.choice)
                handles.setStep(13)
                break
            default:
                handles.setNature1(-1)
                handles.setNature2(-1)
                handles.setNature3(-1)
                break
        }
    }

    return (<>
        <h1 style={states.step < 10 ? { opacity: "5%" } : {}}>Mouse Nature</h1>
        <TwoOption disabled={states.step < 10}
            name="saveuse"
            q="Do you save for winter even if it means going without something now? Or do you use what you have when you need it?"
            option1="Save"
            option2="Use"
            choice={states.nature1}
            handle={handleNatureQs}
        />
        <TwoOption disabled={states.step < 11}
            name="fighthide"
            q="When confronted, do you stand your ground and fight or do you run and hide?"
            option1="Hide"
            option2="Fight"
            choice={states.nature2}

            handle={handleNatureQs}
        />
        <TwoOption disabled={states.step < 12}
            name="fear"
            q="Do you fear owls, weasels and wolves?"
            option1="Yes"
            option2="No"
            choice={states.nature3}
            handle={handleNatureQs}
        />
    </>
    )
}

export default NatureRecruitment