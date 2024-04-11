interface IProps {
  amount: number;
  description: string;
}

const DashboardOverviewCard = ({ amount, description }: IProps) => {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-center bg-primary/50 min-h-[150px] border-2 border-primary rounded-xl">
      <p className="text-2xl font-semibold text-light-1">
        {amount.toLocaleString()}
      </p>
      <h2 className="text-sm font-semibold text-light-1/80">
        {description}
      </h2>
    </div>
  );
};

export default DashboardOverviewCard;
