import type {PlatformStackScreenProps} from '@libs/Navigation/PlatformStackNavigation/types';
import type {OnboardingModalNavigatorParamList} from '@libs/Navigation/types';
import type SCREENS from '@src/SCREENS';

type OnboardingAccountingProps = PlatformStackScreenProps<OnboardingModalNavigatorParamList, typeof SCREENS.ONBOARDING.ACCOUNTING>;

type BaseOnboardingAccountingProps = OnboardingAccountingProps & {
    /* Whether to use native styles tailored for native devices */
    shouldUseNativeStyles: boolean;
};

export type {OnboardingAccountingProps, BaseOnboardingAccountingProps};
