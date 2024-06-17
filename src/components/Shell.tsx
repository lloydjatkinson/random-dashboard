import { BeakerIcon, BriefcaseIcon, BuildingStorefrontIcon, CalendarIcon, ClockIcon, CurrencyDollarIcon, CurrencyPoundIcon, MapPinIcon } from '@heroicons/react/24/solid';

import { Report } from './Report';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const tabs = [
    { name: 'Weekly', href: '#', current: true },
    { name: 'Monthly', href: '#', current: false },
    { name: 'Yearly', href: '#', current: false },
    { name: 'Compare', href: '#', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export const Shell = () => {
    return (
        <div className="flex flex-col gap-y-10">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Dashboard
                    </h2>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            Sheffield, UK
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            Local: 12:00 PM
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <CurrencyPoundIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            £64,468
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative border-b border-gray-200 pb-5 sm:pb-0">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Refresh
                        </button>
                        <button
                            type="button"
                            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Download
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="sm:hidden">
                        <label htmlFor="current-tab" className="sr-only">
                            Select a tab
                        </label>
                        <select
                            id="current-tab"
                            name="current-tab"
                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            defaultValue={tabs.find((tab) => tab.current)?.name}>
                            {tabs.map((tab) => (
                                <option key={tab.name}>{tab.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="hidden sm:block">
                        <nav className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                                <a
                                    key={tab.name}
                                    href={tab.href}
                                    className={classNames(
                                        tab.current
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                        'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                                    )}
                                    aria-current={tab.current ? 'page' : undefined}>
                                    {tab.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div>
                <Report />
            </div>
        </div>
    );
};
