import { t, Trans } from '@lingui/macro';

export default function Index() {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const go = () => {
    if (name) navigate(`/hi/${encodeURIComponent(name)}`);
  };

  return (
    <div>
      <div className="i-carbon-campsite text-4xl inline-block" />
      <p>
        <a rel="noreferrer" href="https://github.com/a1ooha/vitesse-react" target="_blank">
          Vitesse for React
        </a>
      </p>
      <p>
        <em className="text-sm op75">
          <Trans>Opinionated Vite Starter Template</Trans>
        </em>
      </p>
      <div className="py-4" />
      <input
        id="input"
        placeholder={t`What's your name?`}
        type="text"
        autoComplete="false"
        p="x-4 y-2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        onChange={(e) => setName(e.target.value)}
        onKeyDown={({ key }) => key === 'Enter' && go()}
      />
      <div>
        <button className="m-3 text-sm btn" disabled={!name} onClick={() => go()}>
          <Trans>Go</Trans>
        </button>
      </div>
    </div>
  );
}
