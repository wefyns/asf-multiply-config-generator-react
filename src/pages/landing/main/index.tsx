import React, { useState } from 'react';
import JSZip from 'jszip';
import * as Styles from './styles';
import { ToggleTheme } from 'components';

export const Main: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [steamId, setSteamId] = useState('');
  const [tradeToken, setTradeToken] = useState('');
  const [autoSaleEvent, setAutoSaleEvent] = useState(false);

  const handleSteamIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSteamId(event.target.value);
  };

  const handleTradeTokenChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTradeToken(event.target.value);
  };

  const handleAutoSaleEventChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAutoSaleEvent(event.target.checked);
  };

  const generate = () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target && event.target.result) {
        const fileContent = event.target.result as string;
        const lines = fileContent.split('\n');
        const zip = new JSZip();

        lines.forEach((line) => {
          const [login, password] = line.trim().split(':');

          const accountData = {
            AutoSteamSaleEvent: autoSaleEvent,
            Enabled: true,
            SteamLogin: login,
            SteamPassword: password,
            SteamTradeToken: tradeToken,
            SteamUserPermissions: {
              [steamId]: 3,
            },
            IdleRefundableGames: 'false',
          };

          const jsonFileContent = JSON.stringify(accountData, null, 4);
          const jsonFileName = `${login}.json`;

          zip.file(jsonFileName, jsonFileContent);
        });

        zip.generateAsync({ type: 'blob' }).then((content) => {
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(content);
          downloadLink.download = 'results.zip';
          downloadLink.click();
        });

        alert('Generation completed successfully.');
      }
    };

    reader.onerror = () => {
      alert('An error occurred while reading the file.');
    };

    reader.readAsText(file);
  };

  return (
    <Styles.Container>
      <Styles.FormContainer>
        <Styles.Form>
          <Styles.Title>ASF Config Generator</Styles.Title>
          <Styles.Section>
            <Styles.Label>Select text file:</Styles.Label>
            <Styles.FileInputContainer>
              <Styles.CustomFileInput>
                <Styles.InvisibleFileInput
                  type="file"
                  accept="text/plain"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event.target.files) {
                      setFile(event.target.files[0]);
                    }
                  }}
                />
                <Styles.Label style={{ cursor: 'pointer' }}>
                  {file?.name ?? 'Click to select text file'}
                </Styles.Label>
              </Styles.CustomFileInput>
            </Styles.FileInputContainer>
          </Styles.Section>

          <Styles.SectionContainer>
            <Styles.Section>
              <Styles.Label>Your Steam ID:</Styles.Label>
              <Styles.Input
                type="text"
                value={steamId}
                onChange={handleSteamIdChange}
              />
            </Styles.Section>

            <Styles.LinkButton
              target="_blank"
              rel="noopener noreferrer"
              href={'https://steamcommunity.com'}
            >
              Open Steam URL
            </Styles.LinkButton>
          </Styles.SectionContainer>

          <Styles.SectionContainer>
            <Styles.Section>
              <Styles.Label>Your Steam Trade Token:</Styles.Label>
              <Styles.Input
                type="text"
                value={tradeToken}
                onChange={handleTradeTokenChange}
              />
            </Styles.Section>

            <Styles.LinkButton
              target="_blank"
              rel="noopener noreferrer"
              href={'http://steamcommunity.com/my/tradeoffers/privacy'}
            >
              Open Trade Token URL
            </Styles.LinkButton>
          </Styles.SectionContainer>

          <Styles.CheckboxLabel>
            <Styles.Checkbox
              type="checkbox"
              checked={autoSaleEvent}
              onChange={handleAutoSaleEventChange}
            />
            AutoSteamSaleEvent
          </Styles.CheckboxLabel>

          <Styles.ButtonsContainer>
            <Styles.Button onClick={generate}>Generate</Styles.Button>
            <ToggleTheme />
          </Styles.ButtonsContainer>
        </Styles.Form>
      </Styles.FormContainer>
    </Styles.Container>
  );
};
