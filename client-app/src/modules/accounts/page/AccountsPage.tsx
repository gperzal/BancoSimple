import AccountHero from "../components/AccountHero";
import AccountFeatures from "../components/AccountFeatures";
import AccountComparison from "../components/AccountComparison";
import AccountTestimonials from "../components/AccountTestimonials";
import AccountFAQ from "../components/AccountFAQ";
import AccountCTA from "../components/AccountCTA";

const AccountsPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <AccountHero />
        <AccountFeatures />
        <AccountComparison />
        <AccountTestimonials />
        <AccountFAQ />
        <AccountCTA />
      </div>
    </>
  );
};

export default AccountsPage;
