import DriverHero from './DriverHero';
import DriverProblem from './DriverProblem';
import DriverSolution from './DriverSolution';
import DriverFeatures from './DriverFeatures';
import DriverHowItWorks from './DriverHowItWorks';
import DriverTrust from './DriverTrust';
import DriverDownload from './DriverDownload';

export default function DriverFlow() {
  return (
    <div id="driver-flow">
      <DriverHero />
      <DriverProblem />
      <DriverSolution />
      <DriverFeatures />
      <DriverHowItWorks />
      <DriverTrust />
      <DriverDownload />
    </div>
  );
}
