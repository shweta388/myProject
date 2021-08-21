import React from 'react';
import { Provider, defaultTheme, Button, Flex, View } from '@adobe/react-spectrum';
import { Header } from '@adobe/react-spectrum'
import { Text } from '@adobe/react-spectrum'

function Home() {
    return (
        <div>
            <Flex direction="column" gridArea='center'>
               
                    <Header height="size-800">
                        <nav>
                            <ul class="spectrum-Breadcrumbs">
                                <li class="spectrum-Breadcrumbs-item">
                                    <div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Nav Root</div>

                                </li>
                                <li class="spectrum-Breadcrumbs-item">
                                    <div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trend</div>

                                </li>
                                <li class="spectrum-Breadcrumbs-item">
                                    <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>
                                </li>
                            </ul>
                        </nav>           
                     </Header>
    <Flex direction="row" height="size-3000" gap="size-100">
    <View backgroundColor="indigo-600" width="size-2000">
        
        </View>
  </Flex>
                
            </Flex>


        </div>
    );
}

export default Home;
