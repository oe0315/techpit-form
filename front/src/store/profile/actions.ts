import actionCreateorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";

const actionCreateor = actionCreateorFactory();

const profileActions = {
    setProfile: actionCreateor<Partial<Profile>>("SET_PROFILE")
};

export default profileActions;