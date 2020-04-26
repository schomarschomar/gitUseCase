#!/usr/bin/env groovy

pipeline {
    // agent
    // -----
    // The agent section specifies where the entire Pipeline, or a specific stage, 
    // will execute in the Jenkins environment depending on where the agent section is placed. 
    // The section must be defined at the top-level inside the pipeline block, but stage-level usage is optional.
    
    // Parameter    Description
    // -----------------------------------------------------------------------------------------------------------------------
    // any          Execute the Pipeline, or stage, on any available agent. 
    //              For example: agent any
    // none         When applied at the top-level of the pipeline block 
    //              no global agent will be allocated for the entire Pipeline run and 
    //              each stage section will need to contain its own agent section. 
    //              For example: agent none
    // label        Execute the Pipeline, or stage, on an agent available in the Jenkins environment with the provided label. 
    //              For example: agent { label 'my-defined-label' }
    // node         agent { node { label 'labelName' } } behaves the same as agent { label 'labelName' }, 
    //              but node allows for additional options (such as customWorkspace).
    // docker       Execute the Pipeline, or stage, with the given container which will be dynamically 
    //              provisioned on a node pre-configured to accept Docker-based Pipelines
    // dockerfile   Execute the Pipeline, or stage, with a container built from a Dockerfile 
    //              contained in the source repository.
    // kubernetes   Execute the Pipeline, or stage, inside a pod deployed on a Kubernetes cluster.
    
    agent any
    
    // environment
    // -----------
    // The environment directive specifies a sequence of key-value pairs 
    // which will be defined as environment variables for the all steps, or stage-specific steps, 
    // depending on where the environment directive is located within the Pipeline.
    
    environment {
        DEBUG        = 'true'
    }
    
    // options
    // -------
    // The options directive allows configuring Pipeline-specific options from within the Pipeline itself. 
    // Pipeline provides a number of these options, such as buildDiscarder, but they may also be provided by plugins, such as timestamps.
    
    options {
        // buildDiscarder Persist artifacts and console output for the specific number of recent Pipeline runs.  
        // buildDiscarder(logRotator(artifactDaysToKeepStr: '4', artifactNumToKeepStr: '5', daysToKeepStr: '3', numToKeepStr: '2')
        
        // checkoutToSubdirectory Perform the automatic source control checkout in a subdirectory of the workspace. 
        // checkoutToSubdirectory('foo')
        
        // disableConcurrentBuilds Disallow concurrent executions of the Pipeline. Can be useful for preventing simultaneous accesses to shared resources, etc.
        // Do not allow concurrent builds
        disableConcurrentBuilds()
        
        // disableResume Do not allow the pipeline to resume if the master restarts
        // Do not allow the pipeline to resume if the master restarts
        disableResume()
        
        // newContainerPerStage Used with docker or dockerfile top-level agent. When specified, each stage will run in a new container instance on the same node, rather than all stages running in the same container instance.
        // newContainerPerStage
        
        // IndexTriggers Allows overriding default treatment of branch indexing triggers. If branch indexing triggers are disabled at the multibranch or organization label, options { overrideIndexTriggers(true) } will enable them for this job only. Otherwise, options { overrideIndexTriggers(false) } will disable branch indexing triggers for this job only.
        // overrideIndexTriggers(true)
        
        // preserveStashes reserve stashes from completed builds, for use with stage restarting. For example: options { preserveStashes() } to preserve the stashes from the most recent completed build, or options { preserveStashes(buildCount: 5) } to preserve the stashes from the five most recent completed builds.
        // Preserve stashes from completed builds
        // Keep this many of the most recent builds' stashes
        preserveStashes(buildCount: 5)
        
        // quietPeriod Set the quiet period, in seconds, for the Pipeline, overriding the global default. For example: options { quietPeriod(30) }
        // Configuration
        // Quiet period
        // quietPeriod(30)
        
        // retry On failure, retry the entire Pipeline the specified number of times. For example: options { retry(3) }
        retry(0)
        
        // sendSplunkConsoleLog: Send console log Splunk
        // Opt in data sent to Splunk
        // sendSplunkConsoleLog()
        
        // properies
        // Configuration
        // Opt in data sent to Splunk Enable sending pipeline execution diagram by default
        // Pipeline execution diagram pipeline execution diagram is described in graphviz dot format, see also http://graphviz.org/documentation/
        // splunkinsJobOption(enableDiagram: true)
        
        // skipDefaultCheckout Skip checking out code from source control by default in the agent directive. For example: options { skipDefaultCheckout() }
        // skipDefaultCheckout()
        
        // skipStagesAfterUnstable Skip stages once the build status has gone to UNSTABLE. For example: options { skipStagesAfterUnstable() }
        // skipStagesAfterUnstable()
        
        // timeout Set a timeout period for the Pipeline run, after which Jenkins should abort the Pipeline. For example: options { timeout(time: 1, unit: 'HOURS') }
        timeout(time: 1, unit: 'HOURS')
        
        // timestamps Prepend all console output generated by the Pipeline run with the time at which the line was emitted. For example: options { timestamps() }
        // timestamps()
        
        // parallelsAlwaysFailFast Set failfast true for all subsequent parallel stages in the pipeline. For example: options { parallelsAlwaysFailFast() }
        // parallelsAlwaysFailFast()

    }
    
    // parameters
    // ----------
    parameters {
    // The parameters directive provides a list of parameters which a user shou when triggering the Pipeline. 
    // The values for these user-specified parameters are made available to Pipeline steps via the params object.
    // This project is parameterized
    
        // string
        // A parameter of a string type
        // Usage: echo "${params.JUMPHOST_NAME}"
        // string(name: 'JUMPHOST_NAME', defaultValue: 'jumphostXXX', description: '')
    
        // booleanParam
        // A boolean parameter
        // Usage: echo "${params.VERBOSE}"
        booleanParam(name: 'VERBOSE', defaultValue: true, description: 'Verbose console log')
        
        // choice
        // A choice parameter
        // Usage: echo "${params.JUMPHOST}"
        choice(name: 'JUMPHOST', choices: ['JUMPHOST_ONE', 'JUMPHOST_TWO', 'JUMPHOST_THREE'], description: 'Select your Jumphost') 
        
        // password
        // A password parameter
        // Usage: echo "${params.PASSWORD}"
        // password(name: 'PASSWORD', defaultValue: 'SECRET', description: 'A secret password')
    }
    
    // 
    
    // triggers
    // --------
    // triggers {
        // The triggers directive defines the automated ways in which the Pipeline should be re-triggered. 
        // For Pipelines which are integrated with a source such as GitHub or BitBucket, triggers may not be necessary 
        // as webhooks-based integration will likely already be present.
        
        // cron
        // Accepts a cron-style string to define a regular interval at which the Pipeline should be re-triggered. 
        // Jenkins cron syntax
        // The Jenkins cron syntax follows the syntax of the cron utility (with minor differences). 
        // Specifically, each line consists of 5 fields separated by TAB or whitespace:
        // MINUTE	                HOUR	            DOM	                    MONTH	        DOW
        // Minutes within the hour  The hour of the day The day of the month    The month       The day of the week (0–7) 
        // (0–59)                   (0–23)              (1–31)                  (1–12)          where 0 and 7 are Sunday.
        // Configuration    
        // Build periodically    
        // cron('H */23 * * 1-5')
        
        // pollSCM
        // Accepts a cron-style string to define a regular interval at which Jenkins should check for new source changes. 
        // If new changes exist, the Pipeline will be re-triggered.
        // Configuration
        // Poll SCM
        // Schedule
        // pollSCM('H */23 * * 1-5')
        
        // upstream
        // Accepts a comma separated string of jobs and a threshold. 
        // When any job in the string finishes with the minimum threshold, the Pipeline will be re-triggered.
        // Configuration
        // Build after other projects are built
        // upstream(upstreamProjects: 'job1,job2', threshold: hudson.model.Result.SUCCESS)
        // }
            
    // stage
    // -----
    // The stage directive goes in the stages section and should contain 
    // - a steps section, 
    // - an optional agent section, or other stage-specific directives. 
    // Practically speaking, all of the real work done by a Pipeline will be wrapped in one or more stage directives.
    
    // Color        Description
    // ---------------------------------------------------------
    // White	    Stage has not been run yet
    // Blue stripes	Processing in progress
    // Green	    Stage succeeded
    // Red	        Stage succeeded, but downstream stage failed
    // Red stripes	Stage failed
    
    stages {
        
        stage('Declarative: Pre Actions') {
        
            steps {
                
                // checkout: Check out from version control
                // ****************************************
                echo 'git checkout'
                // git checkout
                // git credentialsId: 'schomarschomar', url: 'https:/github.com/schomarschomar/gitUseCase/', branch: 'master'
                
                // Slack notification
                // ******************
                // Color    Descritpion
                // --------------------
                // good     green
                // warning  orange
                // error    grey
                // ..       grey
                
                // Options
                // channel  Allows overriding the Slack Plugin channel specified in the global configuration. 
                //          Multiple channels may be provided as a comma, semicolon, or space delimited string.
                
                // slack
                //      channel: 'splunk', 
                //      color: 'good', 
                //      message: "Build Started: ${env.JOB_NAME} ${env.BUILD_NUMBER} ${BUILD_TAG} \nGit branch/PR: ${env.GIT_BRANCH} ${env.GIT_URL} \nConsole log: ${env.BUILD_URL} ", 
                //      message: "Build: ${env.BUILD_TAG} \nJob: ${env.JOB_NAME} Build: ${env.BUILD_NUMBER} to target ${env.CHANGE_TARGET} started \nChange: ${env.CHANGE_TITLE} \nGit repository: ${env.GIT_URL} \nConsole log: ${env.BUILD_URL} \nResult: ${currentBuild.currentResult}",      
                //      notifyCommitters: true
            }
        }
        
        stage('Debug') { 
            when {
                // debug
                // environment name: 'DEBUG', value: 'true'
            }
            
            steps {
                // Environment variables
                // Environment variables are accessible from Groovy code as env.VARNAME or simply as VARNAME. 
                // You can write to such properties as well (only using the env. prefix):
                // https://opensource.triology.de/jenkins/pipeline-syntax/globals
                
                sh "printenv | sort"
                
                // DEBUG custom variable to show environment variables or not
                echo "DEBUG is ${env.DEBUG}"
                
                // BUILD_NUMBER The current build number, such as "153"
                echo "BUILD_NUMBER is ${env.BUILD_NUMBER}"
                
                // BUILD_ID The current build ID, identical to BUILD_NUMBER for builds created in Jenkins versions 1.597+
                echo "BUILD_ID is ${env.BUILD_ID}"
                
                // BUILD_TAG String of jenkins-${JOB_NAME}-${BUILD_NUMBER}. Convenient to put into a resource file, a jar file, etc for easier identification
                echo "BUILD_TAG is ${env.BUILD_TAG}"
                
                // BUILD_DISPLAY_NAME The display name of the current build, which is something like "#153" by default.
                echo "BUILD_DISPLAY_NAME is ${env.BUILD_DISPLAY_NAME}"
                
                // BUILD_URL The URL where the results of this build can be found (for example http://buildserver/jenkins/job/MyJobName/17/ )
                echo "BUILD_URL is ${env.BUILD_URL}"
                
                // EXECUTOR_NUMBER The unique number that identifies the current executor (among executors of the same machine) performing this build. This is the number you see in the "build executor status", except that the number starts from 0, not 1
                echo "EXECUTOR_NUMBER is ${env.EXECUTOR_NUMBER}"
                
                // JAVA_HOME If your job is configured to use a specific JDK, this variable is set to the JAVA_HOME of the specified JDK. When this variable is set, PATH is also updated to include the bin subdirectory of JAVA_HOME
                echo "JAVA_HOME is ${env.JAVA_HOME}"
                
                // JENKINS_HOME
                echo "JENKINS_HOME is ${env.JENKINS_HOME}"
                
                // JENKINS_URL Full URL of Jenkins, such as https://example.com:port/jenkins/ (NOTE: only available if Jenkins URL set in "System Configuration")
                echo "JENKINS_URL is ${env.JENKINS_URL}"
                
                // JOB_NAME Name of the project of this build, such as "foo" or "foo/bar".
                echo "JOB_NAME is ${env.JOB_NAME}"
                
                // NODE_NAME The name of the node the current build is running on. Set to 'master' for master node.
                echo "NODE_NAME is ${env.NODE_NAME}"
                
                // WORKSPACE The absolute path of the workspace
                echo "WORKSPACE is ${env.WORKSPACE}"
                
                // GIT_URL For Git-based projects, this variable contains the Git url (like git@github.com:user/repo.git or [https://github.com/user/repo.git])
                echo "GIT_URL is ${env.GIT_URL}"
                
                // GIT_BRANCH For Git-based projects, this variable contains the Git branch that was checked out for the build (normally origin/master)
                echo "GIT_BRANCH is ${env.GIT_BRANCH}"
                
                // Environment variables
                echo '\nJenkins environment variables ...'
                // bat('set')
                
                // Workspace
                echo '\nWorkspace files ...'
                // bat 'dir *.*'
                
                // Who am I
                // bat 'whoami'
                
                // ipconfig
                // bat 'ipconfig'
            }
        }
                    
        stage('Build') { 
            // when {
                    // branch
                    // branch 'master'
            // }    
                
            steps {
                echo 'build'
                // bat 'whoami'
            }
        }
        
        stage('Test') { 
            
            // anyOf { 
                        // branch 'master'
                        // branch 'staging'
                        // branch 'development' 
                    // }
            
            when {
                anyOf {
                    // env.BRANCH_NAME.toString().equals('development')
                    // env.GIT_BRANCH('origin/development')
                    // GIT_BRANCH For Git-based projects, this variable contains the Git branch that was checked out for the build (normally origin/master)
                    // branch env.BRANCH_NAME.toString().equals('origin/development')       
                    branch ('origin/development')
                }
            }
                                                                 
            steps {
                // step Test
                echo 'Stage Test'
                echo "GIT_BRANCH is ${env.GIT_BRANCH}"
                
                // Get test results
                // bat 'copy /y C:\\Users\\xx017\\.jenkins\\workspace\\PipelineExample\\input\\*.xml C:\\Users\\xx017\\.jenkins\\workspace\\PipelineExample'
                // bat 'copy /y input\\*.xml'
                
                // Update timestamp for test results
                // bat "copy /b *.xml +,,"
                
                // Show test results
                // junit allowEmptyResults: true, healthScaleFactor: 1.9, testResults: 'testresults.xml'
            }
        }
        
        stage('Deploy') { 
            steps {
                // step deploy
                echo 'Stage Deploy dev'
            }   
        }
    }    
    
    post {
            
        always {
            // always: Always run, regardless of build status
            echo "Stage Post - Build status analysis."
            echo "Verbose log set to ${env.VERBOSE}"
                
            // slack
            // slackSend botUser: false, 
            //      channel: 'splunk', 
            //      color: 'good', 
            //      message: "Build Started: ${env.JOB_NAME} ${env.BUILD_NUMBER} ${BUILD_TAG} \nGit branch/PR: ${env.GIT_BRANCH} ${env.GIT_URL} \nConsole log: ${env.BUILD_URL} ", 
            //      message: "Build: ${env.BUILD_TAG} \nJob: ${env.JOB_NAME} Build: ${env.BUILD_NUMBER} to target ${env.CHANGE_TARGET} finished \nChange: ${env.CHANGE_TITLE} \nGit repository: ${env.GIT_URL} \nConsole log: ${env.BUILD_URL} \nResult: ${currentBuild.currentResult}",      
            //      notifyCommitters: true
        }
                
        unstable {
            // unstable: Run if the build status is "Unstable"
            echo "Stage Post - Build status is Unstable."
            
            // Verbose log
            script {
                if (env.VERBOSE == true) {
                    echo 'Verbose log ...'
                    
                    sh "printenv | sort"
                }
            }
        }
                
        notBuilt {
            // notBuilt: Run if the build status is "Not Built"
            echo "Stage Post - Build status is Not Built."
            
            // Verbose log
            script {
                if (env.VERBOSE == true) {
                    echo 'Verbose log ...'
                    
                    sh "printenv | sort"
                }
            }    
        }
            
        cleanup {
            // cleanup: Always run after all other conditions, regardless of build status
            echo "Stage Post - Cleanup."
        }
            
        // regreession: Run if the current builds status is worse than the previous builds status
        regression {
            echo 'Stage Post - regreession: Run if the current builds status is worse than the previous builds status'
        }
            
        // aborted: Run when the build status is "Aborted"
        aborted {
            // Stage Post - aborted: Run when the build status is "Aborted"
            echo "Stage Post - Build status is Aborted."
            
            // Verbose log
            script {
                if (env.VERBOSE == true) {
                    echo 'Verbose log ...'
                    
                    sh "printenv | sort"
                }
            }
        }
            
        success {
            // Stage Post - success: Run if the build status is "Success" or hasnt been set yet
            echo "Stage Post - Build status is Success."
            
            // Verbose log
            script {
                if (env.VERBOSE == true) {
                    echo 'Verbose log ...'
                }
            }
        }
            
        failure {
            // Stage Post - failure: Run if the build status is "Failure"
            echo "Stage Post - Build status is Failure."
            
            // Verbose log
            script {
                if (env.VERBOSE == true) {
                    echo 'Verbose log ...'
                }
            }
                
                // DEBUG custom variable to show environment variables or not
                echo "DEBUG is ${env.DEBUG}"
                
                // BUILD_NUMBER The current build number, such as "153"
                echo "BUILD_NUMBER is ${env.BUILD_NUMBER}"
                
                // BUILD_ID The current build ID, identical to BUILD_NUMBER for builds created in Jenkins versions 1.597+
                echo "BUILD_ID is ${env.BUILD_ID}"
                
                // BUILD_TAG String of jenkins-${JOB_NAME}-${BUILD_NUMBER}. Convenient to put into a resource file, a jar file, etc for easier identification
                echo "BUILD_TAG is ${env.BUILD_TAG}"
                
                // BUILD_DISPLAY_NAME The display name of the current build, which is something like "#153" by default.
                echo "BUILD_DISPLAY_NAME is ${env.BUILD_DISPLAY_NAME}"
                
                // BUILD_URL The URL where the results of this build can be found (for example http://buildserver/jenkins/job/MyJobName/17/ )
                echo "BUILD_URL is ${env.BUILD_URL}"
                
                // EXECUTOR_NUMBER The unique number that identifies the current executor (among executors of the same machine) performing this build. This is the number you see in the "build executor status", except that the number starts from 0, not 1
                echo "EXECUTOR_NUMBER is ${env.EXECUTOR_NUMBER}"
                
                // JAVA_HOME If your job is configured to use a specific JDK, this variable is set to the JAVA_HOME of the specified JDK. When this variable is set, PATH is also updated to include the bin subdirectory of JAVA_HOME
                echo "JAVA_HOME is ${env.JAVA_HOME}"
                
                // JENKINS_HOME
                echo "JENKINS_HOME is ${env.JENKINS_HOME}"
                
                // JENKINS_URL Full URL of Jenkins, such as https://example.com:port/jenkins/ (NOTE: only available if Jenkins URL set in "System Configuration")
                echo "JENKINS_URL is ${env.JENKINS_URL}"
                
                // JOB_NAME Name of the project of this build, such as "foo" or "foo/bar".
                echo "JOB_NAME is ${env.JOB_NAME}"
                
                // NODE_NAME The name of the node the current build is running on. Set to 'master' for master node.
                echo "NODE_NAME is ${env.NODE_NAME}"
                
                // WORKSPACE The absolute path of the workspace
                echo "WORKSPACE is ${env.WORKSPACE}"
                
                // GIT_URL For Git-based projects, this variable contains the Git url (like git@github.com:user/repo.git or [https://github.com/user/repo.git])
                echo "GIT_URL is ${env.GIT_URL}"
                
                // GIT_BRANCH For Git-based projects, this variable contains the Git branch that was checked out for the build (normally origin/master)
                echo "GIT_BRANCH is ${env.GIT_BRANCH}"
        }
                
        
        unsuccessful {
            // unscuccessful: Run if the current builds status is "Aborted", "Failure" or "Unstable"
            echo "Stage Post - Build status is Unsuccessful."
            
            // Verbose log
            script {
                if (env.VERBOSE == true) {
                    echo 'Verbose log ...'
                }
            }
        }
              
        fixed {
            // fixed: Run if the previous build was not successful and the current builds status is "Success"
            echo "Stage Post - Build status is Unsuccessful."
            
            // Verbose log
            script {
                if (env.VERBOSE == true) {
                    echo 'Verbose log ...'
                }
            }
        }
            
        
        changed {
            // changed: Run if the current builds status is different than the previous builds status
            echo "Stage Post - Build status is Changed."
            
            // Verbose log
            script {
                if (env.VERBOSE == true) {
                    echo 'Verbose log ...'
                }
            }
        }
    }       
}
