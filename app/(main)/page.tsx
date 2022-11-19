import Header from "./(components)/(Header)/Header";

import SiapaKami from "./(components)/(SiapaKami)/SiapaKami";
import Divisi from "./(components)/(Divisi)/Divisi";
import Bergabung from "./(components)/(Bergabung)/Bergabung";

export default function MainPage() {
  return (
    <main>
      <Header />

      <SiapaKami />
      <Divisi />
      <Bergabung />
    </main>
  );
}
