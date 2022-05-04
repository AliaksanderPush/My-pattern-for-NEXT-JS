import { Htag } from "../components";
import { Button } from "../components";
import { P } from "../components";
import { Tag } from "../components";
import { withLayout } from "../laout/Layout";

function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h2">Text</Htag>
      <Button appearance="primary" className="aaa">
        Ввод
      </Button>
      <P size="s" className="aa">
        Василиса
      </P>
      <P size="m" className="bb">
        Василиса
      </P>
      <P size="l" className="cc">
        Василиса
      </P>
      <Tag size="m" color="red">
        Маленький
      </Tag>
    </>
  );
}
export default withLayout(Home);
