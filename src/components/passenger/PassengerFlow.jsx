import PassengerHero from './PassengerHero';
import PassengerBenefits from './PassengerBenefits';
import PassengerHowItWorks from './PassengerHowItWorks';
import PassengerFeatures from './PassengerFeatures';
import PassengerTrust from './PassengerTrust';
import PassengerDownload from './PassengerDownload';

export default function PassengerFlow() {
  return (
    <div id="passenger-flow">
      <PassengerHero />
      <PassengerBenefits />
      <PassengerHowItWorks />
      <PassengerFeatures />
      <PassengerTrust />
      <PassengerDownload />
    </div>
  );
}
