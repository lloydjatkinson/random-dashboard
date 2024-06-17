import { BarChart, Card, Divider, DonutChart, LineChart, List, ListItem, Switch } from '@tremor/react';
import CountUp from 'react-countup';
import clsx from 'clsx';
import { useState } from 'react';
import { Sparklines } from './Sparklines';

export const Report = () => {
    const data = [
        {
            name: 'Plans sold',
            stat: 340,
            change: '+12.1%',
            changeType: 'positive',
        },
        {
            name: 'Profit',
            stat: 1342,
            change: '-9.8%',
            changeType: 'negative',
        },
        {
            name: 'Other',
            stat: 400,
            change: '+7.7%',
            changeType: 'positive',
        },
    ];

    const chartData = [
        {
            date: 'Jan 23',
            Organic: 232,
            Sponsored: 0,
            Affiliate: 49,
        },
        {
            date: 'Feb 23',
            Organic: 241,
            Sponsored: 0,
            Affiliate: 61,
        },
        {
            date: 'Mar 23',
            Organic: 291,
            Sponsored: 0,
            Affiliate: 55,
        },
        {
            date: 'Apr 23',
            Organic: 101,
            Sponsored: 0,
            Affiliate: 21,
        },
        {
            date: 'May 23',
            Organic: 318,
            Sponsored: 0,
            Affiliate: 66,
        },
        {
            date: 'Jun 23',
            Organic: 205,
            Sponsored: 0,
            Affiliate: 69,
        },
        {
            date: 'Jul 23',
            Organic: 372,
            Sponsored: 0,
            Affiliate: 55,
        },
        {
            date: 'Aug 23',
            Organic: 341,
            Sponsored: 0,
            Affiliate: 74,
        },
        {
            date: 'Sep 23',
            Organic: 387,
            Sponsored: 120,
            Affiliate: 190,
        },
        {
            date: 'Oct 23',
            Organic: 220,
            Sponsored: 0,
            Affiliate: 89,
        },
        {
            date: 'Nov 23',
            Organic: 372,
            Sponsored: 0,
            Affiliate: 44,
        },
        {
            date: 'Dec 23',
            Organic: 321,
            Sponsored: 0,
            Affiliate: 93,
        },
    ];

    const summary = [
        {
            name: 'Appliance',
            value: 3273,
        },
        {
            name: 'Electrical',
            value: 120,
        },
        {
            name: 'Game Console',
            value: 866,
        },
    ] as const;

    const valueFormatter = (number: number) =>
        `${Intl.NumberFormat('en-GB').format(number).toString()}`;

    const statusColor = {
        Organic: 'bg-blue-500',
        Sponsored: 'bg-violet-500',
        Affiliate: 'bg-fuchsia-500',
    };

    const barChartData = [
        {
            date: 'Jan 23',
            'This Year': 68560,
            'Last Year': 28560,
        },
        {
            date: 'Feb 23',
            'This Year': 70320,
            'Last Year': 30320,
        },
        {
            date: 'Mar 23',
            'This Year': 80233,
            'Last Year': 70233,
        },
        {
            date: 'Apr 23',
            'This Year': 55123,
            'Last Year': 45123,
        },
        {
            date: 'May 23',
            'This Year': 56000,
            'Last Year': 80600,
        },
        {
            date: 'Jun 23',
            'This Year': 100000,
            'Last Year': 85390,
        },
        {
            date: 'Jul 23',
            'This Year': 85390,
            'Last Year': 45340,
        },
        {
            date: 'Aug 23',
            'This Year': 80100,
            'Last Year': 70120,
        },
        {
            date: 'Sep 23',
            'This Year': 75090,
            'Last Year': 69450,
        },
        {
            date: 'Oct 23',
            'This Year': 71080,
            'Last Year': 63345,
        },
        {
            date: 'Nov 23',
            'This Year': 61210,
            'Last Year': 100330,
        },
        {
            date: 'Dec 23',
            'This Year': 60143,
            'Last Year': 45321,
        },
    ];

    function valueFormatter2(number: number) {
        const formatter = new Intl.NumberFormat('en-GB', {
            maximumFractionDigits: 0,
            notation: 'compact',
            compactDisplay: 'short',
            style: 'currency',
            currency: 'GBP',
        });

        return formatter.format(number);
    }

    const dataOther = [
        { name: 'Travel', amount: 6730, share: '32.1%', color: 'bg-cyan-500', }, { name: 'IT & equipment', amount: 4120, share: '19.6%', color: 'bg-blue-500', }, { name: 'Training & development', amount: 3920, share: '18.6%', color: 'bg-indigo-500', }, { name: 'Office supplies', amount: 3210, share: '15.3%', color: 'bg-violet-500', }, { name: 'Communication', amount: 3010, share: '14.3%', color: 'bg-fuchsia-500', },
    ];

    const currencyFormatter = (number: number) => {
        return '£' + Intl.NumberFormat('en-GB').format(number).toString();
    };



    const [showComparison, setShowComparison] = useState(false);

    return (
        <div className="flex flex-col gap-y-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((item) => (
                    <Card key={item.name}>
                        <div className="flex items-center justify-between">
                            <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
                                {item.name}
                            </p>
                            <span
                                className={clsx(
                                    item.changeType === 'positive'
                                        ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20'
                                        : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20',
                                    'inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset',
                                )}
                            >
                                {item.change}
                            </span>
                        </div>
                        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            {/* <CountUp end={item.stat} /> */}
                            {item.stat}

                        </p>
                    </Card>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <Card className="">
                        <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Products sold by type
                        </h3>
                        <LineChart
                            data={chartData}
                            index="date"
                            categories={['Organic', 'Sponsored', 'Affiliate']}
                            colors={['blue', 'violet', 'fuchsia']}
                            valueFormatter={valueFormatter}
                            showLegend={false}
                            showYAxis={false}
                            startEndOnly={true}
                            className="mt-6 h-32"
                        />
                        <List className="mt-2">
                            {summary.map((item) => (
                                <ListItem key={item.name}>
                                    <div className="flex items-center space-x-2">
                                        <span
                                            className={'h-0.5 w-3'}
                                            aria-hidden={true}
                                        />
                                        <span>{item.name}</span>
                                    </div>
                                    <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                        {valueFormatter(item.value)}
                                    </span>
                                </ListItem>
                            ))}
                        </List>
                    </Card>

                </div>
                <div>
                    <Card className="">
                        <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Sales overview
                        </h3>
                        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </p>
                        <BarChart
                            data={barChartData}
                            index="date"
                            categories={
                                showComparison ? ['Last Year', 'This Year'] : ['This Year']
                            }
                            colors={showComparison ? ['cyan', 'blue'] : ['blue']}
                            valueFormatter={valueFormatter2}
                            yAxisWidth={45}
                            className="mt-6 hidden h-60 sm:block"
                        />
                        <BarChart
                            data={data}
                            index="date"
                            categories={
                                showComparison ? ['Last Year', 'This Year'] : ['This Year']
                            }
                            colors={showComparison ? ['cyan', 'blue'] : ['blue']}
                            valueFormatter={valueFormatter2}
                            showYAxis={false}
                            className="mt-4 h-56 sm:hidden"
                        />
                        <Divider />
                        <div className="mb-2 flex items-center space-x-3">
                            <Switch
                                id="comparison"
                                onChange={() => setShowComparison(!showComparison)}
                            />
                            <label
                                htmlFor="comparison"
                                className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
                            >
                                Show same period last year
                            </label>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="sm:mx-auto sm:max-w-lg">
                        <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Total expenses by category
                        </h3>
                        <DonutChart
                            className="mt-8"
                            data={dataOther}
                            category="amount"
                            index="name"
                            valueFormatter={currencyFormatter}
                            showTooltip={false}
                            colors={['cyan', 'blue', 'indigo', 'violet', 'fuchsia']}
                        />
                        <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                            <span>Category</span>
                            <span>Amount / Share</span>
                        </p>
                        <List className="mt-2">
                            {data.map((item) => (
                                <ListItem key={item.name} className="space-x-6">
                                    <div className="flex items-center space-x-2.5 truncate">
                                        <span
                                            className={clsx(
                                                'h-2.5 w-2.5 shrink-0 rounded-sm',
                                            )}
                                            aria-hidden={true}
                                        />
                                        <span className="truncate dark:text-dark-tremor-content-emphasis">
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                            {currencyFormatter(1234)}
                                        </span>
                                        <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                                            20%
                                        </span>
                                    </div>
                                </ListItem>
                            ))}
                        </List>
                    </Card>

                </div>
                <Sparklines />
            </div>
        </div>
    );
};